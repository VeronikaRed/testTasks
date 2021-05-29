// Напишите команды для получения следующих значений:
// ⦁	Выведите 5 записей из коллекции posts пропустив первые 5
// ⦁	Выведите все записи у которых like больше 100
// ⦁	Добавьте новую запись в коллекцию posts
// ⦁	Выведите список авторов и их общее количество like


// 1.	Указываю с какой базой данных работаю -use {name}
// Указываю с какой коллекции(posts) пропустить 5 и взять 5 записей 
db.posts.find().skip(5).limit(5)

// 2. 
db.posts.find({like:{$gt: 100} }, {})

// 3.
db.posts.insert({title: "Hello", content: "hddjdj", author: "George", like: NumberInt(105), dislike: NumberInt(5)})

// 4.
db.posts.find({},{author: 1, _id: 0})
db.posts.aggregate(
    { $group: { _id : 0, likes : { $sum: "$like" } } }
)
