export default function Counter(){
    const counterData=[
        {
            name: "Years of Expreience",
            count: new Date().getFullYear() - 2020
        },
        {
            name: "Projects Complated",
            count: 50
        },
    ]
    return(
        <div className="counter">
            {
                counterData.map((count, i)=>(
                    <div key={i} className="counter-item">
              <strong>{count.count}+</strong>
              <p>{count.name}</p>
            </div>
                ))
            }
          </div>
    )
}