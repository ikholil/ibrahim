"use client"
// components/ProjectForm.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type ProjectFormValues = {
  title: string;
  description: string;
  thumb?: string;
  date: string;
  liveLink?: string;
  githubLink: string;
};

const ProjectForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProjectFormValues>();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: ProjectFormValues) => {
    setLoading(true);
    try {
      // Send data to your API
      const response = await fetch('/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Handle success
      alert('Project created successfully');
    } catch (error) {
      // Handle error
      console.error('Error creating project:', error);
      alert('Error creating project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Create New Project</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            {...register('title', { required: 'Title is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Thumbnail URL</label>
          <input
            type="url"
            {...register('thumb')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            {...register('date', { required: 'Date is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Live Link</label>
          <input
            type="url"
            {...register('liveLink')}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">GitHub Link</label>
          <input
            type="url"
            {...register('githubLink', { required: 'GitHub link is required' })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {errors.githubLink && <p className="text-red-500 text-xs mt-1">{errors.githubLink.message}</p>}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className={`${
              loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-700'
            } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Project'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
