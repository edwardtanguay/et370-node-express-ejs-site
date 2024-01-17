import axios from 'axios';
import { IBook } from './interfaces';

export const getBooks = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios.get('https://edwardtanguay.vercel.app/share/books.json');
			const rawBooks: any[] = response.data;
			const books: IBook[] = [];
			for (const rawBook of rawBooks) {
				const book: IBook = {
					idCode: rawBook.idcode,
					title: rawBook.title,
					description: rawBook.description
				}
				books.push(book);
			}
			resolve(books);
		}
		catch (e) {
			reject({ message: "unknown error occurred" })
		}
	});
}