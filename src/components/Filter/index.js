function SearchForm(props) {
    return (
        <form className="search">
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                    onChange={props.handleFilter}
                    type="text"
                    className="form-control"
                    placeholder="Type in a last name to begin"
                    id="lastName"
                />
            </div>
        </form>
    )
}

export default SearchForm;