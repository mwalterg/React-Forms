
export default function Authenticate() {
      const [successMessage, setSuccessMessage] = useState(null);
      const [error, setError] = useState(null);
      const token = (props) => {
        return <div className= {props.token}></div>
      async function handleClick() {
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
            {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }   
        }
        );
        const result=await response.json();
        setSuccessMessage(result.message);
    } catch (err) {
      setError(error.message);
        }
      
      return (
        <div>
          <h2>Authenticate</h2>
          {successMessage && <p>{successMessage}</p>}
          {error && <p>{error}</p>}
          <button onClick={handleClick}>Authenticate Token!</button>
          
        </div>
      );
    }
}
}