show databases;

use classicmodels;

select distinct status from orders;

select * from orders;
select * from orderdetails;
select * from products;
select * from customers;


select a.customerName, b.productName, c.status from customers a, products b, orders c where a.customerNumber=103;
select a.customername,c.productname,b.status from customers a, orders b, products c where a.customernumber=b.customernumber and a.customerNumber=103;
select a.customername,b.orderdate from customers a,orders b where a.customerNumber=b.customerNumber and a.customerNumber=103;

select a.orderdate,a.status,b.productcode from orders a,orderdetails b where a.ordernumber=b.ordernumber;

select a.customername,c.productname,b.status from customers a, products c,orders b,orderdetails d 
where a.customernumber=b.customernumber 
and a.customernumber=103
and c.productcode=d.productcode
and d.ordernumber=b.ordernumber;

select * from orders where orderdate between '2003-01-06' and '2003-01-30';


show tables;

select * from products;
select * from productlines;

select productName,productcode,textdescription from products a
inner join productlines b
on a.productline=b.productline;

select * from products;
select * from customers;
select * from orders;

select customerName,status from customers a
inner join orders b
on a.customerNumber=b.customerNumber;