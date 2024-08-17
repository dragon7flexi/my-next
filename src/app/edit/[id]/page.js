import BookDetails from "@/components/BookDetails";
import FormEdit from '@/components/FormEdit';
import { getBookById, getReviewById } from '@/lib/getter';

export default async function EditPage({ params }) {
    const book = await getBooksById(params.id);
    const review = await getReviewById(params.id);

    const read = (reviews?.read || new Date()).toLocaleDateString('sv-SE');

    return (
        <div id="form">
            <BookDetails book={book} />
            <hr/>
            <FormEdit src={{ id: book.id, read, memo: review?.memo }} />
        </div>
    );
}