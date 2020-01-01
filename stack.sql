create database stack2;
use stack2;
create table rtable
(
Id int,
Username varchar(100),
Password varchar(100),
EmailId varchar(100),
Address varchar(100)
);
DELIMITER //
create procedure usp_insert23
(
in Id int(10),
in Username varchar(100),
in Password varchar(100),
in EmailId varchar(100),
in Address varchar(100)
)
begin
insert into rtable values(Id,Username,Password,EmailId,Address);
end //
call usp_insert23(1,'srisai','pass','email','addreess');
