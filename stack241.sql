use new1;
update tbl_logininfo set flag = 0
where Id = 1;
select * from tbl_logininfo;
DELIMITER //
create procedure usp_active12
(
in username varchar(100)
)
begin
declare x3 int default 0;
 set x3=(select Id from tbl_logininfo where username=username); 
 update tbl_logininfo set flag=1 where Id=x3;
end//
call usp_active12('srisai');
select * from tbl_logininfo;