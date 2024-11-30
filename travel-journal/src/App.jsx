import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"


export default function App(){
    const travel_entries = data.map(entry_data => {
        return <Entry 
                key={entry_data.id}
                entry={entry_data}
                />
    })
    return(
        <>
            <Header />
            {travel_entries}
        </>
    )
}