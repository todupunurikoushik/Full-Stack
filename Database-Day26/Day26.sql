use classicmodels;
select * from customers;

select customerNumber,customerName,phone,city,state,country,creditLimit from customers;

create view getCustomerData
as
select customerNumber,customerName,phone,city,state,country,creditLimit from customers;

select * from getCustomerData;
select customerNumber,customerName,phone from getCustomerData;
insert into getCustomerData(customerNumber,customerName,phone,city,state,country,creditLimit) values('1234','Koushik','8978991600','HYD','TS','INDIA','1827');
update getCustomerData set city='Las Vegas' where customerNumber=103;

select * from customers; /* customername,phn,add*/
select * from orders; /* orderDate,status */

create view getCustomerOrderData
as
select a.customerNumber,a.phone,a.addressLine1,b.orderDate,b.status
from customers a,orders b
where a.customerNumber=b.customerNumber;

select * from getCustomerOrderData;