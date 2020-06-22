show databases;

use classicmodels;

show tables;

select * from t1_emp;

select * from t2_emp;

select EmpName from t1_emp
intersect
select EmpName from t2_emp;

select EmpName from t1_emp
minus
select EmpName from t2_emp;

use full_stack;

show tables;

drop table tbl_student;

create table tbl_student(
	Id int auto_increment,
    studentName varchar(50) not null,
    emailId varchar(50) not null,
    studentPwd varchar(50) not null,
    PhnNumber bigint,
    Age int not null,
    DeptId int,
    primary key(Id)
);

create table tbl_student_dept(
	deptId int auto_increment,
    deptName varchar(100) not null,
    deptLocation varchar(100) not null,
    primary key(deptId)

);
insert into tbl_student(studentName,emailId,studentPwd,phnNumber,Age,DeptId) values('koushik','koushik@gmail.com','koushik@123','8978991600','22','1'),
('soumya','soumya@fgmail.com','soumya@1600','9704090962','26','2'),('ajay','ajjay@gmail.com','ajay123','9849507009','25','3'),
('anil','anil@gmail.com','anil@123','9290157959','24','4');
insert into tbl_student_dept(deptName,deptLocation) values ('CSE','HYD'),('ECE','HYD'),('Aero','Hyd'),('Civil','Hyd');

select * from tbl_student;
select * from tbl_student_dept;

create table tbl_student1(
	Id int auto_increment,
    studentName varchar(50) not null,
    emailId varchar(50) not null,
    studentPwd varchar(50) not null,
    PhnNumber bigint,
    Age int not null,
    DeptId int,
    primary key(Id)
);
insert into tbl_student1(studentName,emailId,studentPwd,phnNumber,Age,DeptId) values('koushik','koushik@gmail.com','koushik@123','8978991600','22','1'),
('soumya','soumya@fgmail.com','soumya@1600','9704090962','26','2'),('ajay','ajjay@gmail.com','ajay123','9849507009','25','3'),
('anil','anil@gmail.com','anil@123','9290157959','24','4');
select * from tbl_student1;
select * from tbl_student_dept;

select studentName,phnNumber,Age,deptName,deptLocation from tbl_student1,tbl_student_dept
where tbl_student1.deptId = tbl_student_dept.deptId;

select a.studentName,a.phnNumber,a.Age,b.deptName,b.deptLocation  from tbl_student1 a, tbl_student_dept b
where a.deptId=b.deptId;

select a.studentName,a.phnNumber,a.Age,b.deptName,b.deptLocation  from tbl_student1 a, tbl_student_dept b
where a.deptId=b.deptId and a.Age>=25;

select a.studentName,a.phnNumber,a.Age,b.deptName,b.deptLocation  from tbl_student1 a, tbl_student_dept b
where a.deptId=b.deptId and a.Age>=20 and b.deptId=1;

select a.studentName,a.phnNumber,a.Age,b.deptName,b.deptLocation  from tbl_student1 a, tbl_student_dept b
where a.deptId=b.deptId and a.studentName like 'a%' AND a.deptId in(1,2,3,4);

show databases;

use classicmodels;

show tables;

describe orderdetails;

describe orders;

select * from orders;

select a.customerName,a.phone,a.creditLimit,b.shippedDate,b.status from customers a, orders b
where a.CustomerNumber = b.CustomerNumber and b.status='cancelled';