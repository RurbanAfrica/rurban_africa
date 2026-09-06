// api/verify-payment.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ verified: false, reason: "Method not allowed" });
  }

  const { transaction_id, expected_amount, expected_currency } = req.body ?? {};

  if (!transaction_id) {
    return res.status(400).json({ verified: false, reason: "Missing transaction_id" });
  }

  const flwResponse = await fetch(
    `https://api.flutterwave.com/v3/transactions/${transaction_id}/verify`,
    {
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
      },
    }
  );

  const result = await flwResponse.json();

  const flwSuccess = result.status === "success" && result.data?.status === "successful";
  const amountMatches = result.data?.amount === expected_amount;
  const currencyMatches = result.data?.currency === expected_currency;

  const verified = flwSuccess && amountMatches && currencyMatches;

  if (!verified) {
    return res.status(400).json({ verified: false, flwStatus: result.data?.status });
  }

  return res.status(200).json({
    verified: true,
    amount: result.data.amount,
    currency: result.data.currency,
    customerEmail: result.data.customer?.email,
    txRef: result.data.tx_ref,
  });
}
