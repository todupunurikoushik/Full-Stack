show databases;
use classicmodels;
show tables;

select * from customers;
select * from orders;

select a.customernumber,a.customername,b.ordernumber,b.status
from customers a
left join orders b on
a.customerNumber = b.customerNumber;
select a.customernumber,a.customername,b.ordernumber,b.status
from customers a
left join orders b on
a.customerNumber = b.customerNumber
where ordernumber is null;
select a.customernumber,a.customername,b.ordernumber,b.status
from customers a
right join orders b on
a.customerNumber = b.customerNumber;

select customerName,phone,city,state,postalcode,country from customers 
order by customerName;


DELIMITER $$
create procedure getCustomerData()
begin
select customerName,phone,city,state,postalcode,country from customers 
order by customerName;
end$$

call getCustomerData()
call getOrderDetails()