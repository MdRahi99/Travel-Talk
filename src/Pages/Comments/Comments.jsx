import useComments from "../../Hooks/useComments";

const Comments = () => {

    const [comments] = useComments();

    return (
        <>
            <div className="h-[82vh] flex flex-col gap-4 overflow-y-auto">
                {
                    comments.map(comment => {
                        return <div key={comment._id}>
                            <h1>{comment.name}</h1>
                        </div>
                    })
                }
            </div>
        </>
    );
};

export default Comments;