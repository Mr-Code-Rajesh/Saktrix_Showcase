export default function InputFieldShowcase() {
  return (
    <div className="space-y-2">
      <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Username
      </label>
      <input
        id="username"
        type="text"
        placeholder="Enter your username"
        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}
