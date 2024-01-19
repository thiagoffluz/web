create database mundoverde;

use mundoverde;

-- Categoria 
-- 0 = Cereais
-- 1 = Sumplementos
-- 2 = Temperos
create table Produtos (
	id int primary key auto_increment,
    descricao varchar(60) not null,
	categoria int not null,
    preco float not null,
    quantidade int not null,
    url varchar(255)
);

insert into Produtos values (1, 'Granola com castanhas 1kg', 0, 40.18, 10, 'cereais.png');
insert into Produtos values (2, 'Whey protein 907g', 1, 379.39, 12, 'suplementos.png');
insert into Produtos values (3, 'Alho em pó 59g', 2, 19.99, 14, 'temperos.png');
