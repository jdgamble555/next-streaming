'use server';

type Todo = {
    title: string
};


export const getTodo = async () => {
    const randomTodo = Math.floor(Math.random() * 200) + 1;
    return await fetch(`https://jsonplaceholder.typicode.com/todos/${randomTodo}`)
        .then(r => r.json()) as Todo;
};


export default async function Todo() {

    const todo = await getTodo();

    return (
        <h2>{todo.title}</h2>
    );
}