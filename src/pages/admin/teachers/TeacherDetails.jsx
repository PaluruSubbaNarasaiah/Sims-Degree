import React, { useState, useEffect } from 'react';
import Select from 'react-select';

const SUBJECT_OPTIONS = [
  'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English Literature', 'Economics',
  'Political Science', 'History', 'Geography', 'Psychology', 'Sociology', 'Philosophy',
  'Computer Science', 'Statistics', 'Business Studies', 'Accounting', 'Commerce',
  'Hindi Literature', 'Sanskrit', 'French', 'German', 'Fine Arts', 'Music'
].map((sub) => ({ label: sub, value: sub }));

const CLASS_OPTIONS = [
  { label: 'B.A. 1st Year', value: 'BA-1' },
  { label: 'B.A. 2nd Year', value: 'BA-2' },
  { label: 'B.A. 3rd Year', value: 'BA-3' },
  { label: 'B.Sc. 1st Year', value: 'BSC-1' },
  { label: 'B.Sc. 2nd Year', value: 'BSC-2' },
  { label: 'B.Sc. 3rd Year', value: 'BSC-3' },
  { label: 'B.Com. 1st Year', value: 'BCOM-1' },
  { label: 'B.Com. 2nd Year', value: 'BCOM-2' },
  { label: 'B.Com. 3rd Year', value: 'BCOM-3' },
  { label: 'BCA 1st Year', value: 'BCA-1' },
  { label: 'BCA 2nd Year', value: 'BCA-2' },
  { label: 'BCA 3rd Year', value: 'BCA-3' }
];

function TeacherDetails({ data, editable = false, onClose, onUpdate, existingTeachers = [] }) {
  const [formData, setFormData] = useState({
    ...data,
    subject: [],
    classes: [],
    classTeacher: null,
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData({
        ...data,
        subject: data.subject?.map((s) => ({ label: s, value: s })) || [],
        classes: data.classes?.map((c) => ({ label: c, value: c })) || [],
        classTeacher: data.classTeacher ? CLASS_OPTIONS.find(c => c.value === data.classTeacher) : null,
        password: data.password || '',
      });
    }
  }, [data]);

  const validateForm = () => {
    const newErrors = {};
    const { empId, name, email, phone, subject, classes, classTeacher, password } = formData;
    const trimmedEmpId = empId?.trim();
    const trimmedName = name?.trim();
    const trimmedEmail = email?.trim().toLowerCase();
    const trimmedPhone = phone?.trim();

    if (!trimmedEmpId) newErrors.empId = 'EMP ID is required';
    if (!trimmedName) newErrors.name = 'Name is required';

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!trimmedEmail) newErrors.email = 'Email is required';
    else if (!gmailRegex.test(trimmedEmail)) {
      newErrors.email = 'Only Gmail addresses are allowed';
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!trimmedPhone) newErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(trimmedPhone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!classTeacher) newErrors.classTeacher = 'Class Coordinator is required';

    if (!data.empId || (data.empId && (trimmedEmpId?.toLowerCase() !== data.empId?.toLowerCase() || trimmedEmail !== data.email?.toLowerCase() || trimmedPhone !== data.phone))) {
        existingTeachers
            .filter((t) => t.empId !== data.empId)
            .forEach((t) => {
                if (t.empId.toLowerCase() === trimmedEmpId?.toLowerCase()) {
                    newErrors.empId = 'Duplicate EMP ID found';
                }
                if (trimmedEmail && t.email?.toLowerCase() === trimmedEmail) {
                    newErrors.email = 'Duplicate Gmail ID found';
                }
                if (trimmedPhone && t.phone === trimmedPhone) {
                    newErrors.phone = 'Duplicate phone number found';
                }
            });
    }

    if (subject.length < 1) newErrors.subject = 'At least 1 subject is required';
    if (classes.length < 1) newErrors.classes = 'At least 1 class is required';

    if (editable && (!password || password.length < 6)) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubjectChange = (selected) => {
    if (selected.length <= 5) {
      setFormData((prev) => ({ ...prev, subject: selected }));
      setErrors((prev) => ({ ...prev, subject: '' }));
    }
  };

  const handleClassChange = (selected) => {
    setFormData((prev) => ({ ...prev, classes: selected }));
    setErrors((prev) => ({ ...prev, classes: '' }));
  };

  const handleClassTeacherChange = (selected) => {
    setFormData((prev) => ({ ...prev, classTeacher: selected }));
    setErrors((prev) => ({ ...prev, classTeacher: '' }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setFormData((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const updatedData = {
      ...formData,
      empId: formData.empId.trim(),
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      address: formData.address?.trim() || '',
      subject: formData.subject.map((s) => s.value),
      classes: formData.classes.map((c) => c.value),
      classTeacher: formData.classTeacher.value,
    };

    onUpdate(updatedData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] md:w-[450px] max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">
          {editable ? 'Edit Faculty Details' : 'Faculty Details'}
        </h2>

        <div className="flex flex-col gap-3">
          <div>
            <input
              name="empId"
              value={formData.empId}
              onChange={handleChange}
              disabled={!editable || (editable && data.empId)}
              placeholder="Faculty EMP ID *"
              className={`p-2 border rounded w-full ${
                errors.empId ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.empId && (
              <p className="text-red-500 text-sm mt-1">{errors.empId}</p>
            )}
          </div>

          {editable && (
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password *"
                className={`p-2 border rounded w-full ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600"
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
          )}

          {['name', 'email', 'phone', 'address'].map((field) => (
            <div key={field}>
              <input
                name={field}
                value={formData[field]}
                onChange={handleChange}
                disabled={!editable}
                placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                className={`p-2 border rounded w-full ${
                  errors[field] ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium mb-1">Subjects (1–5) *</label>
            <Select
              isMulti
              options={SUBJECT_OPTIONS}
              value={formData.subject}
              onChange={handleSubjectChange}
              placeholder="Select subjects..."
              isDisabled={!editable}
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Assigned Classes *</label>
            <Select
              isMulti
              options={CLASS_OPTIONS}
              value={formData.classes}
              onChange={handleClassChange}
              placeholder="Select classes..."
              isDisabled={!editable}
            />
            {errors.classes && <p className="text-red-500 text-sm mt-1">{errors.classes}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Class Coordinator *</label>
            <Select
              options={CLASS_OPTIONS}
              value={formData.classTeacher}
              onChange={handleClassTeacherChange}
              placeholder="Select class coordinator..."
              isDisabled={!editable}
            />
            {errors.classTeacher && <p className="text-red-500 text-sm mt-1">{errors.classTeacher}</p>}
          </div>

          {editable && (
            <div>
              <label className="block text-sm font-medium mb-1">Upload Image *</label>
              <div
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file && file.type.startsWith('image/')) {
                    setFormData((prev) => ({
                      ...prev,
                      image: URL.createObjectURL(file),
                    }));
                  }
                }}
                onDragOver={(e) => e.preventDefault()}
                className="flex items-center justify-center p-4 border-2 border-dashed border-gray-400 rounded cursor-pointer bg-gray-50 hover:bg-gray-100 text-center"
                onClick={() => document.getElementById('fileInputEdit').click()}
              >
                {formData.image ? (
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <p className="text-gray-600 text-sm">Drag & drop or click to upload</p>
                )}
              </div>
              <input
                id="fileInputEdit"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
          )}

          {!editable && formData.image && (
            <img
              src={formData.image}
              alt="Teacher"
              className="w-24 h-24 rounded-full object-cover mx-auto mt-3"
            />
          )}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Close</button>
          {editable && (
            <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded">
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeacherDetails;