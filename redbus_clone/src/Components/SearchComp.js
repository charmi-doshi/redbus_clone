import React from 'react'

export const SearchComp = () => {
    return (
        <div>
            <h1>Search</h1>
            <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
        </div>
    )
}
