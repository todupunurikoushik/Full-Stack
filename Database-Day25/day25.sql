show databases;
use classicmodels;
select * from customers;
call get_distinctCountry();
call get_customerDetails(103);
call get_details('USA');

create table registerDetail(
	Id int auto_increment,
    username varchar(100),
    password varchar(100),
    emailid varchar(100),
    phn bigint,
    address varchar(100),
    primary key(Id)
);

create table loginDetails(
	Id int auto_increment,
    username varchar(100),
    password varchar(100),
	primary key(Id)
);

insert into registerDetails(username,password,emailid,phn,address) values('koushik123','koushik@1600','koushik@gmail.com','8978991600','Hyd'),
('ravi','ravi@123','ravi@gmail.com','9842748944','Kmr'),('sandesh','sand@676','sand@gmail.com','9594038299','Krmr'),
('kiran','kiran123','kiran@gmail.com','9999999929','Sec'),('Rajesj','raj123','raj@gmail.com','7538989829','Sdpt');

call insert_Userdetails('koushik123','koushik@1600','koushik@gmail.com','8978991600','Hyd');
call insert_Userdetails('ravi','ravi@123','ravi@gmail.com','9842748944','Kmr');
call insert_Userdetails('sandesh','sand@676','sand@gmail.com','9594038299','Krmr');
select * from registerDetail;
select * from loginDetails;
call test_Login('koushik123','koushik@1600');
call test_Login('sandesh','sand@675');
call update_Userdetails('koushik','1');