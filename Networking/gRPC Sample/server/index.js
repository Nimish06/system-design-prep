const PROTO_PATH = './customers.proto'
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const customerProto = grpc.loadPackageDefinition(packageDefinition);
const server = new grpc.Server();
const customers = [
    {id: 1, name: 'John Doe', age: 30, address: '123 Main St'},
    {id: 2, name: 'Jane Doe', age: 25, address: '456 Oak Ave'},
    {id: 3, name: 'Jim Doe', age: 35, address: '789 Pine Rd'}
];
server.addService(customerProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, {customers: customers});
    },
    get: (call, callback) => {
        const customer = customers.find(c => c.id === call.request.id);
        if (!customer) {
            return callback(new Error('Customer not found'));
        } else {
            callback(null, {customer: customer});
        }
    },
    insert: (call, callback) => {
        let newCustomer = call.request.customer;
        newCustomer.id = customers.length + 1;
        customers.push(newCustomer);
        callback(null, {customer: newCustomer});
    },
    update: (call, callback) => {
        const customer = customers.find(c => c.id === call.request.customer.id);
        if (!customer) {
            return callback(new Error('Customer not found'));
        }
        Object.assign(customer, call.request.customer);
        callback(null, {customer: customer});
    },
    remove: (call, callback) => {
        const customerIndex = customers.findIndex(c => c.id === call.request.id);
        if (customerIndex === -1) {
            return callback(new Error('Customer not found'));
        }
        customers.splice(customerIndex, 1);
        callback(null, {});
    }
});

server.bindAsync("127.0.0.1:50051", grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('gRPC server running on port 50051');
});

const client = new customerProto.CustomerService('localhost:50051', grpc.credentials.createInsecure());

module.exports = client;