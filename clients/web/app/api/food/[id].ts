import db from "@/lib/db";

export default function handler(req: any, res: any) {
  const { id } = req.query;
  const sql = "SELECT * FROM food WHERE category = ?";
  db.query(sql, [id], (err: any, result: any) => {
    if (err) return res.status(500).json({ message: err });
    return res.status(200).json(result);
  });
}
