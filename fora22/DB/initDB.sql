USE untactdt;

CREATE TABLE usertable (
UserWebId VARCHAR(100),
UserName VARCHAR(100),
PW varchar(100),
PhoneNum varchar(100),

PRIMARY KEY(UserWebId)
)Default charset = UTF8;



create table car(
CarWebId VARCHAR(100),
CarId VARCHAR(100),

foreign key(CarWebId) references usertable(UserWebId)
)Default charset = UTF8;



create table menuboard(
MenuNo INT AUTO_INCREMENT,
FoodNameKor VARCHAR(100),
FoodNameEng VARCHAR(100),
Price INT,

PRIMARY KEY(MenuNo)
)Default charset = UTF8;



create table statetable(
StateNo INT,
WhatState TEXT,

PRIMARY KEY(StateNo)
)Default charset = UTF8;



create table paymentstate(
PaymentNo INT,
WhatPayment TEXT,

PRIMARY KEY(PaymentNo)
)Default charset = UTF8;



create table ordertable(
OrderNo INT AUTO_INCREMENT,
OrderWebId VARCHAR(100),
WebCarId VARCHAR(100),
ImageWebCarId VARCHAR(100),
IsEqualCarAndImage TINYINT(1) default 0,

OrderPayment INT,

PRIMARY KEY(OrderNo),
foreign key(OrderWebId) references usertable(UserWebId),
foreign key(OrderPayment) references paymentstate(PaymentNo)
)Default charset = UTF8;

create table ordertomenu(
OrderToMenu_OrderNo INT,
OrderToMenu_MenuNo INT,
OrderState INT default 1,
MenuCount INT,

foreign key(OrderToMenu_OrderNo) references ordertable(OrderNo),
foreign key(OrderToMenu_MenuNo) references menuboard(MenuNo),
foreign key(OrderState) references statetable(StateNo)
)Default charset = UTF8;

create table baskettable(
    BasketId VARCHAR(100),
    BasketMenuNo INT,
    BasketMenuCount INT,
    BasketState TINYINT(1) default 0,

    foreign key(BasketId) references usertable(UserWebId),
    foreign key(BasketMenuNo) references menuboard(MenuNo)
)Default charset = UTF8;