type StatusProps = {
  status: string,
}
export const Status = () => {
  return <div>
    <h2>Loading...</h2>
    <h2>Data fetched successfully</h2>
    <h2>Error Data fetched</h2>
  </div>
}