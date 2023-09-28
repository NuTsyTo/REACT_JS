function Wrapper({ children }){
    return(
        <div style={ {backgroundColor: 'grey',
                        borderRadius:'10px',
                        boxShadow:'5px 5px 15px 5px lightgreen',
                        width: '400px', 
                        padding: '10px', 
                        margin:'5px auto'}}>
            { children }
        </div>
    )
}

export default Wrapper