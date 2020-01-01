
create table tble_emp3
(
Id int NOT NULL AUTO_INCREMENT,
empname varchar(100),
empsal varchar(100),
empadd varchar(100),
depno int(10), 
PRIMARY KEY(Id)
);
create table tble_depat3
(
Id int NOT NULL AUTO_INCREMENT,
depname varchar(100),
depno int(10),
PRIMARY KEY(Id)
);
DELIMITER //
create procedure usp_emp1
(
in Id int(10),
in empname varchar(100),
in empsal varchar(100),
in empadd varchar(100),
in depno int(10)
)
begin
insert into tble_emp3 values(Id,empname,empsal,empadd,depno);
end // 
call usp_emp1(1,'srisai','24000','add',24);
call usp_emp1(2,'sri','24000','add',24);
call usp_emp1(3,'sai','24000','add',24);
call usp_emp1(4,'hari','24000','add',24);
call usp_emp1(5,'apri','24000','add',24);
call usp_emp1(6,'pari','24000','add',24);
call usp_emp1(7,'suri','24000','add',24);
call usp_emp1(8,'ss','24000','add',24);
call usp_emp1(9,'tt','24000','add',24);
call usp_emp1(10,'s','24000','add',24);
call usp_emp1(11,'s1','25000','add',25);
call usp_emp1(12,'s2','24000','add',25);
call usp_emp1(13,'ansri','24000','add24',33);
call usp_emp1(14,'ansrisai','24000','add27',33);
call usp_emp1(15,'ansrisri','24000','add29',33);

DELIMITER //
create procedure usp_emp2
(
in Id int(10),
in depname varchar(100),
in depno int(10)
)
begin
insert into tble_depat3 values(Id,depname,depno);
end // 
call usp_emp2(1,'cse',24);
call usp_emp2(2,'cse',24);
call usp_emp2(3,'cse',24);
call usp_emp2(4,'ece',25);
call usp_emp2(5,'cse',25);
call usp_emp2(6,'ece',25);
call usp_emp2(7,'ece',25);
call usp_emp2(8,'aero',33);
call usp_emp2(9,'civil',33);
call usp_emp2(10,'mech',33);
select * from tble_emp3;
select * from tble_depat3;
select tble_emp3.empname,tble_emp3.empadd,tble_depat3.depname from tble_emp3,tble_depat3 where tble_emp3.depno=tble_depat3.depno and tble_emp3.depno=33;
DELIMITER //
create procedure usp_filterdepno
(
in depno int(10)
)
begin
select tble_emp3.empname,tble_emp3.empadd,tble_depat3.depname from tble_emp3,tble_depat3 where tble_emp3.depno=tble_depat3.depno and tble_emp3.depno=depno;
end // 
call usp_filterdepno(33);
DELIMITER //
create procedure usp_filterdepnosal123
(
in depno int(10)
)
begin
select distinct tble_emp3.empname,tble_emp3.empadd,tble_depat3.depname from tble_emp3,tble_depat3 where tble_emp3.depno=tble_depat3.depno and tble_emp3.empsal='24000' and tble_emp3.depno=depno;
end // 
call usp_filterdepnosal123(33);
