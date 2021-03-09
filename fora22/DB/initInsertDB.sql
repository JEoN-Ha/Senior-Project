USE untactdt;

insert into usertable(UserWebId, UserName, PW, PhoneNum)
values ('fora22', '팽대원', '1111', '01010101010');
insert into usertable(UserWebId, UserName, PW, PhoneNum)
values ('jiyeon', '기지연', '2222', '01020202020');
insert into usertable(UserWebId, UserName, PW, PhoneNum)
values ('armful', '임아름', '3333', '01030303030');


insert into car(CarWebId, CarId)
values ('fora22', '11가 1111');
insert into car(CarWebId, CarId)
values ('jiyeon', '22나 2222');
insert into car(CarWebId, CarId)
values ('armful', '33다 3333');
insert into car(CarWebId, CarId)
values ('fora22', '69구 4381');

insert into statetable(StateNo, WhatState)
values(1, '결제 전');
insert into statetable(StateNo, WhatState)
values(2, '결제 후(수령 전)');
insert into statetable(StateNo, WhatState)
values(3, '수령 후');
insert into statetable(StateNo, WhatState)
values(4, '장바구니 내역 삭제');
insert into statetable(StateNo, WhatState)
values(5, '결제 취소');

insert into paymentstate(PaymentNo,WhatPayment)
values(1, '카카오 페이');
insert into paymentstate(PaymentNo,WhatPayment)
values(2, '신용카드');
insert into paymentstate(PaymentNo,WhatPayment)
values(3, '페이코');

insert into menuboard(FoodNameKor, FoodNameEng, Price)
values('싸이버거', 'Cyburger', 3500);
insert into menuboard(FoodNameKor, FoodNameEng, Price)
values('빅맥', 'BignMc', 5600);
insert into menuboard(FoodNameKor, FoodNameEng, Price)
values('콜라', 'Coke', 1500);



insert into ordertable(OrderWebId, WebCarId, OrderPayment)
values('fora22', '69구 4381', 1);
insert into ordertomenu(OrderToMenu_OrderNo, OrderToMenu_MenuNo, MenuCount)
values(1, 1, 2);


insert into ordertable(OrderWebId, WebCarId, OrderPayment)
values('jiyeon', '22나 2222', 2);
insert into ordertomenu(OrderToMenu_OrderNo, OrderToMenu_MenuNo, MenuCount)
values(2, 2, 1);

insert into ordertable(OrderWebId, WebCarId,  OrderPayment)
values('fora22', '22나 2222', 1);
insert into ordertomenu(OrderToMenu_OrderNo, OrderToMenu_MenuNo, MenuCount)
values(1, 3, 2);

-- update ordertable set ImageWebCarId = '69구 4381' where OrderNo = 1;
-- update ordertable set ImageWebCarId = '22나 2222' where OrderNo = 2;
-- update ordertable set ImageWebCarId = '22가 2222' where OrderNo = 3;

insert into baskettable(BasketId, BasketMenuNo, BasketMenuCount)
values ('fora22', 1, 3);

insert into baskettable(BasketId, BasketMenuNo, BasketMenuCount)
values ('fora22', 2, 1);

insert into baskettable(BasketId, BasketMenuNo, BasketMenuCount)
values ('armful', 1, 2);