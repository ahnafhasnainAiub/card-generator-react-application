import React from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateField, setTheme } from '../../features/cardSlice';

const CardForm = () => {
  const dispatch = useDispatch();
  const card = useSelector((state) => state.card);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleThemeChange = (e) => {
    dispatch(setTheme(e.target.value));
  };

  return (
    <form className="grid grid-cols-1 gap-4">
      <FormField type="text" label="Name" name="name" value={card.name} onChange={handleChange} />
      <FormField type="text" label="Position" name="position" value={card.position} onChange={handleChange} />
      <FormField type="text" label="Personal Website" name="personalWebsite" value={card.personalWebsite} onChange={handleChange} />
      <FormField type="text" label="LinkedIn" name="linkedin" value={card.linkedin} onChange={handleChange} />
      <FormField type="text" label="Skills" name="skills" value={card.skills} onChange={handleChange} />
      <FormField type="file" label="Profile Image" onChange={(e) => handleChange({ target: { name: 'profileImage', value: URL.createObjectURL(e.target.files[0]) } })} />
      <FormField type="select" label="Theme" name="theme" value={card.theme} onChange={handleThemeChange} options={[
        { value: 'dark', label: 'Dark' },
        { value: 'light', label: 'Light' },
        { value: 'green', label: 'Green' },
        { value: 'blue', label: 'Blue' },
        { value: 'minimal', label: 'Minimal' },
      ]} />
    </form>
  );
};

export default CardForm;