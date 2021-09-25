
import ItemList from '../components/ItemList'
import { Link } from 'react-router-dom';
import CategoryList from '../components/CategoryList';
import { useState, useEffect } from 'react';
import '../components/Homepage.css';

function Home(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedItems, setLoadedItems] = useState([]);
    const [loadedCategories, setLoadedCategories] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:8080/items').then(res => {
            return res.json();
        }).then(data =>{
            console.log(data);
            setIsLoading(false);
            setLoadedItems(data);
        });
    },[])

    useEffect(()=>{
        fetch('http://localhost:8080/category').then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            setIsLoading(false);
            setLoadedCategories(data);
        });
    }, [])

    if (isLoading){
        return(<div>Loading...</div>);
    }

    return (
        <div classname="addButtons">
            <section className="addItemButton">
            <Link to="add-item">
                <button className="button">Lisa uus ese</button>
            </Link>
            <ItemList items={loadedItems}/>
            </section>
            {/* <br /> */}
            <section className="addCategoryButton">
            <Link to="add-category">
                    <button className="button">Lisa uus kategooria</button>
            </Link>
            <CategoryList categories={loadedCategories} />
            </section>
        </div>
        

        
    )
}

export default Home;