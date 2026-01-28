function ConditionalRendering(){
    let fruits = []
    const isLoading = true;
    fruits = ["avacade","graps", "oranje"] // assume that data/fruits coming from api(backend -> db)

    return(
        <div>
            {
                fruits.map((fruit, index) => (
                    <p key={index}>{fruit}</p>
                ))
            }
        </div>
    )
}

export default ConditionalRendering;