//Nimen ja numeron syöttökentät
const AddContact = (props) => {
    const {newContact,
        name,
        changeName,
        number,
        changeNumber} = props

    return(
        <div>
            <form onSubmit={newContact}>
                <div>
                    name: <input
                    value={name}
                    onChange={changeName}/>
                </div>
                <div>
                    number: <input
                    value={number}
                    onChange={changeNumber}/>
                </div>
                <div>
                    <button type="submit">
                        add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddContact;