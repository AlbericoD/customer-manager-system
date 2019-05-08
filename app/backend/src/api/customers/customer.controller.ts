import { Request, Response } from 'express';
import Customer from './customer.model';

export default class CustomerController {
  public findAll = async (req: Request, res: Response): Promise<any> => {
    try {
      const customers = await Customer.find();
      if (!customers) {
        return res.status(404).send({
          success: false,
          message: 'Customer not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: customers
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public search = async (req: Request, res: Response): Promise<any> => {
    const query = new RegExp(req.params.any, 'i');
    try {
      const customer = await Customer.find({
        $or: [
          {
            doc: query
          },
          {
            name: query
          }
        ]
      });

      if (!customer) {
        return res.status(404).send({
          success: false,
          message: 'Customer not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: customer
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public findOne = async (req: Request, res: Response): Promise<any> => {
    try {
      const customer = await Customer.findById(req.params.id);
      if (!customer) {
        return res.status(404).send({
          success: false,
          message: 'Customer not found',
          data: null
        });
      }

      res.status(200).send({
        success: true,
        data: customer
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public create = async (req: Request, res: Response): Promise<any> => {
    const { name, doc, phone, cel, email } = req.body;
    try {
      const customerCreated = await Customer.findOneAndUpdate(
        { doc },
        {
          $setOnInsert: {
            name,
            doc,
            phone,
            cel,
            email
          }
        },
        {
          upsert: true,
          runValidators: true
        }
      );
      if (customerCreated !== null && !customerCreated.isNew) {
        return res.status(403).send({
          success: false,
          message: 'Customer already exists',
          data: null
        });
      }
      res.status(200).send({
        success: true,
        data: customerCreated
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        errors: err,
        message: err.toString(),
        data: null
      });
    }
  };

  public remove = async (req: Request, res: Response): Promise<any> => {
    try {
      const { doc } = req.body;
      const customer = await Customer.findOneAndDelete({ doc });

      if (!customer) {
        return res.status(404).send({
          success: false,
          message: 'Customer not found',
          data: null
        });
      }
      res.status(200).send({ success: true });
    } catch (err) {
      res.status(500).send({
        success: false,
        errors: err,
        message: err.toString(),
        data: null
      });
    }
  };
}
