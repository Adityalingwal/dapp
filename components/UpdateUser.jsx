import { useState } from 'react';
import { updateUser } from '../app/utils';

export default function UpdateUserForm() {
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [favNumber, setFavNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const tx = await updateUser(userId, name, favNumber);
      setMessage(`User updated successfully.`);
      // Clear form data after successful update
      setUserId('');
      setName('');
      setFavNumber('');
    } catch (error) {
      setMessage(`Error updating user: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full mt-6 max-w-md mx-auto border border-black rounded-lg overflow-hidden bg-white text-black">
      <div className="p-4 border-b border-black">
        <h2 className="text-2xl font-bold">updateUser</h2>
      </div>
      <form className="p-4" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label htmlFor="id" className="block text-sm font-medium text-black mb-1">
              ID
            </label>
            <input
              id="id"
              type="text"
              placeholder="enter ID"
              className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="enter Name"
              className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="favNumber" className="block text-sm font-medium text-black mb-1">
              Fav Number
            </label>
            <input
              id="favNumber"
              type="number"
              placeholder="favNumber"
              className="w-full px-3 py-2 border border-black rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              value={favNumber}
              onChange={(e) => setFavNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? 'Updating...' : 'Update User'}
          </button>
        </div>
      </form>
      {message && (
        <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded">
          {message}
        </div>
      )}
    </div>
  )
}