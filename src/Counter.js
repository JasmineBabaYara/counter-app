function counter(props){
    return(
        <div>
        <span className="num">{props.data.num}</span>
        <div className="btn">
          <button className="start-btn" onClick={props.addClick}>Add</button>
          <button className="reset-btn" onClick={props.resetClick}>Reset</button>
        </div>
      </div>
    )
}

export default counter;