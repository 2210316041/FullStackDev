use new1;
-- query -- database engine -- compile and executes
-- procedures -- pre compiled block code where it compiles once and executies more no of times--lot of time saved
-- view --only select statements
-- simple view
create view view_1 as select * from tbl_logininfo;
select * from view_1;
use emp1;
create view view_2 as 
select tble_emp3.empname,tble_emp3.empadd,tble_depat3.depname from tble_emp3,tble_depat3 where tble_emp3.depno=tble_depat3.depno and tble_emp3.depno=33;
select * from view_2;
call usp_emp2(9,'civil',33);
select * from view_2;