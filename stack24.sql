create database new1;
create table tbl_logininfo
(
Id int NOT NULL AUTO_INCREMENT,
username varchar(100),
password varchar(100),
PRIMARY KEY(Id)
);
create table tbl_contactinfo1
(
Id int NOT NULL AUTO_INCREMENT,
email varchar(100),
mobile int(10),
address varchar(100),
userid int,
PRIMARY KEY(Id)
);
create table tbl_academicinfo2
(
Id int NOT NULL AUTO_INCREMENT,
qual varchar(100),
stream varchar(100),
yop varchar(100),
college varchar(100),
userid int,
PRIMARY KEY(Id)
);
drop table tbl_contactinfo;
DELIMITER //
create procedure usp_emp1234
(
in Id int(10),
in username varchar(100),
in password varchar(100),
in email varchar(100),
in mobile int(10),
in address varchar(100),
in qual varchar(100),
in stream varchar(100),
in yop varchar(100),
in college varchar(100)
)
begin
insert into tbl_logininfo values(1,'srisai','sree');
insert into tbl_contactinfo1 values(1,'s@gmail.com',123446789,'mainkonda');
insert into tbl_academicinfo2 values('1','eng','cse','2020','gitam');
end // 
DELIMITER //
create procedure usp_emp331
(
in username varchar(100),
in password varchar(100),
in email varchar(100),
in mobile int(10),
in address varchar(100),
in qual varchar(100),
in stream varchar(100),
in yop varchar(100),
in college varchar(100)
)
begin
declare x int default 0;
insert into tbl_logininfo(username,password) values(username,password);
set x=(select Max(Id) from tbl_logininfo);
insert into tbl_contactinfo1(email,mobile,address,userid) values(email,mobile,address,x);
insert into tbl_academicinfo2(qual,stream,yop,college,userid) values(qual,stream,yop,college,x);
end // 
call usp_emp331('srisai','sree','s@gmail.com',123456789,'manikonda','btech','cse','2020','gitam');
select * from tbl_logininfo;
DELIMITER //
create procedure usp_checkLogin1(
in username varchar(100),
in password varchar(100)
)
begin
select Id from tbl_logininfo where username=username and password=password;
end //
call usp_checkLogin1('srisai','sree');
select * from tbl_contactinfo1;
DELIMITER //
create procedure usp_checkLogin12(
in username varchar(100),
in password varchar(100)
)
begin
declare sta int default 0;
set sta =(select Id from tbl_logininfo where username=username and password=password);
end //
call usp_checkLogin12('srisai','sree');
select * from tbl_logininfo;
DELIMITER //
create procedure usp_updatepwd1
(
in username varchar(100),
in password varchar(100)
)
begin 
declare x1 int default 0;
set x1=(select Id from tbl_logininfo where username=username and password=password);
if(x1>0) then
update tbl_logininfo set password='srisai12' where Id=x1;
end if;
end //
call usp_updatepwd1('srisai','srisaisri');
select * from tbl_logininfo;
select x1;
DELIMITER //
create procedure usp_checknameexists
(
in username varchar(100)
)
begin 
declare sta1 int default 0;
set sta1=(select Id from tbl_logininfo where username=username);
select sta1;
end //
call usp_checknameexists('srisai');
DELIMITER //
create procedure usp_Doublecheckexist
(
in username varchar(100),
in password varchar(100)
)
begin 
declare x2 int default 0;
set x2=(select Id from tbl_logininfo where username=username);
if(x2>0) then 
select "user exists";
end if;
if x2 is null then
select "user not exists";
end if;
end // 
call usp_Doublecheckexist('srisai','srisai12');
describe tbl_logininfo;
alter table tbl_logininfo
add flag int;
describe tbl_logininfo;
select * from tbl_logininfo;
use new1;
update tbl_loigninfo set flag=1
where Id = 1;
use new1;