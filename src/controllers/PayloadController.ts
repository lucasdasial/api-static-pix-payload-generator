import { Payload } from "../entities/Payload";

export const createPayload = (req: any, res: any) => {
  let pixkey = req.body.pixkey;
  let name = req.body.name;
  let city = req.body.city;
  let amount = req.body.amount;

  const pix = new Payload(pixkey, name, city, amount);

  if (req.body.pixkey == undefined) {
    res.status(400).json({
      message: "Undefined, the key that defines the pixkey must be 'pixkey'",
    });
  } else if (req.body.name == undefined) {
    res.status(400).json({
      message:
        "Undefined, the key that defines the merchant name must be 'name'",
    });
  } else if (req.body.city == undefined) {
    res.status(400).json({
      message:
        "Undefined, the key that defines the merchant city must be 'city'",
    });
  } else if (req.body.amount == undefined) {
    res.status(400).json({
      message:
        "Undefined, the key that defines the transaction amount must be 'amount'",
    });
  } else {
    res.status(201).send(pix.getPayload());
  }
};
