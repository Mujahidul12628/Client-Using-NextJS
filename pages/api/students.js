export default async function handler(req, res) {
    try {
      const response = await fetch('http://localhost:3200/api/v1/students');
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  