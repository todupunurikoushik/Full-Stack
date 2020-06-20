create database Full_Stack;

show databases;

use full_stack;

create table tbl_Student(
	StudentId int,
    StudentName varchar(100),
    StudentPwd varchar(20),
    emailId varchar(100),
    mobileNumber bigint
);


describe tbl_Student;

insert into tbl_Student(StudentId,StudentName,StudentPwd,emailId,mobileNumber) value
(1,'Koushik','Koushik@123','koushik@gmail.com',8978991600)

select * from tbl_Student;

select StudentName,StudentPwd from tbl_Student;


create table tbl_Emp(
	Id int auto_increment,
    empName varchar(100) not null,
    empAddress varchar(100) not null,
    empEmail varchar(100) not null,
    mobileNumber bigint unique,
    primary key(Id)
);


insert into tbl_Emp(empName,empAddress,empEmail,mobileNumber)
 values('Koushik','KMR','koushik@gmail.com',8978991600);
 
 select * from tbl_Emp;
 insert into tbl_Emp(empName,empAddress,empEmail,mobileNumber)
 values('Koushik','KMR','koushik@gmail.com',9704090962),
 ('Raj','HYD','abc@gmail.com',9849507009);

update tbl_Emp set
empName = 'Koushik Raj'
where Id=6
 
 delete from tbl_Emp where Id=6;
 select * from tbl_Emp
 order by empName;
 
 select * from tbl_Emp
 order by empName desc;
 
 
 show tables;