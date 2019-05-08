import { Router } from 'express';
import Controller from './customer.controller';

const customer: Router = Router();
const controller = new Controller();

// Retrieve all Customers
customer.get('/', controller.findAll);

// Retrieve a Specific Customers
customer.get('/:id', controller.findOne);

// Retrieve a Search params
customer.get('/search/:any', controller.search);

// Create a Customers with not exist
customer.post('/', controller.create);

// Delete a Customers wby doc
customer.delete('/', controller.remove);

export default customer;
