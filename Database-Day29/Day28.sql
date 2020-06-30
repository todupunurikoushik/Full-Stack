create database testDb;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'koushik@123';

flush privileges;

use testDb;

create table userData(
	Id int auto_increment,
    username varchar(50) not null,
    password varchar(50) not null,
	primary key(Id)
);

select * from userData;

call get_userData();
call get_userdetailsusingId(1);
call insertrecord('gitam','gitam@123');
call insertrecord('soumya','soumya123');
call del_record(7);
call del_record(8);
create table feed_back(
	emailID varchar(50),
    feedback varchar(200)
);
select * from feedback;
call insert_fb('koushik@gmail.com','Avg');
call get_feedback();