show databases;

use classicmodels;

show tables;

describe customers;

select * from customers;

select * from customers where country = 'USA';

select * from customers where creditLimit > 50000;

select * from customers where creditLimit between 50000 and 100000;

select * from customers where country = 'USA' or 'Germany';

select * from customers where country in ('USA','Germany');

select * from customers where country = 'Germany' or 'USA';

select * from employees;

select lastName from employees order by lastName;

select distinct lastName from employees order by lastName;

select distinct country from customers order by country;

select distinct state from customers order by state;

select distinct city from customers order by city;

select * from customers where state is null;

select * from customers where state is not null;

select distinct state,city from customers where state is not null order by state,city;

select state from customers group by state;

select distinct state from customers;

select sum(creditlimit) from customers;

select sum(creditlimit) as SumCredit from customers;

select customername as Customer_Name from customers;

select avg(creditlimit) as Average from customers;

select count(*) as RecordCount from customers;

select state from customers;

select count(state) from customers;

select max(creditlimit) from customers;

select min(creditlimit) from customers;

select count(distinct state) from customers;

select count(distinct state) from customers where country = 'USA';

select count(distinct state) from customers group by country;

select * from customers where customerName like 'a%';

select * from customers where customername like '%a';

select * from customers where customerName like 'a_e%';

SELECT * FROM CUSTOMERS WHERE CUSTOMERNAME LIKE '%AA%'; 

SELECT * FROM CUSTOMERS LIMIT 5;

SELECT * FROM CUSTOMERS LIMIT 0,10;

create table t1_emp(
	Id int auto_increment,
    EmpName varchar(50) not null,
    Empdes varchar(50) not null,
    Empsal int,
    primary key(Id)
);

create table t2_emp(
	Id int auto_increment,
    EmpName varchar(50) not null,
    Empdes varchar(50) not null,
    Empsal int,
    primary key(Id)
);


insert into t1_emp(EmpName,Empdes,Empsal) values('Anil','Trainer','1200'),('Harsha','Developer','1250'),('Dileep','Trainer','1500'),('Sandhesh','Software','1800');
insert into t1_emp(EmpName,Empdes,Empsal) values('Anil','Trainer','1200'),('Harsha','Developer','1250'),('Dileep','Trainer','1500'),('Sandhesh','Software','1800'),
('Rahul','Developer','1400'),('Shilpa','Tester','1200'),('Prabhu','Trainer','1500'),('Pandey','Tester','1100');


select EmpName from t1_emp
union
select EmpName from t2_emp;
select EmpName from t1_emp
union all
select EmpName from t2_emp;
select Empdes from t1_emp
union
select Empdes from t2_emp;
select Empdes from t1_emp
union all
select Empdes from t2_emp;