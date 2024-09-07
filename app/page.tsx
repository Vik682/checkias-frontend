// app/page.tsx
import axios from 'axios';

interface ApiResponse {
  id: number;
  name: string;
  // Add other fields based on your API response
}

// The Page component is now an async function
const Page = async () => {
  let data: ApiResponse[] = [];
  let error: string | null = null;

  try {
    const response = await axios.get<ApiResponse[]>('http://localhost:8000/tp_copy/tc/');
    data = response.data;
  } catch (err) {
    error = 'Error fetching data';
    console.error('Error fetching data:', err);
  }

  return (
    <div>
      <h1>Data from Django API</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Page;
