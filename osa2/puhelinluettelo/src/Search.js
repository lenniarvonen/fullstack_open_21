
//Hakukenttä
const Filter = (props) => {
    const {condition, handleSearch} = props

    return(
    <div>
        search: <input
        value = {condition}
        onChange = {handleSearch}
        />
    </div>
    )
}

export default Filter;