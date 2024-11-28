import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [updatedProfile, setUpdatedProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (!userId) {
                    setError('User is not authenticated');
                    setLoading(false);
                    return;
                }
                const { data } = await axios.get(`http://localhost:5000/api/user/${userId}`);
                setProfile(data);
                setUpdatedProfile(data);
            } catch (err) {
                setError('Failed to load profile');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleSave = async () => {
        try {
            const userId = localStorage.getItem('userId');
            await axios.put(`http://localhost:5000/api/user/${userId}`, updatedProfile);
            setProfile(updatedProfile);
            setEditMode(false);
        } catch (error) {
            setError('Failed to save profile');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="profile-container">
            <h1>Your Profile</h1>
            {!editMode ? (
                <div className="profile-details">
                    <p>Username: {profile.username}</p>
                    <p>Email: {profile.email}</p>
                    {profile.profilePicture && <img src={profile.profilePicture} alt="Profile" />}
                    <button onClick={() => setEditMode(true)}>Edit Profile</button>
                </div>
            ) : (
                <div className="profile-edit">
                    <input
                        type="text"
                        value={updatedProfile.username}
                        onChange={(e) => setUpdatedProfile({ ...updatedProfile, username: e.target.value })}
                        placeholder="Username"
                    />
                    <input
                        type="email"
                        value={updatedProfile.email}
                        onChange={(e) => setUpdatedProfile({ ...updatedProfile, email: e.target.value })}
                        placeholder="Email"
                    />
                    {/* Add Profile Picture Edit if needed */}
                    <input
                        type="file"
                        onChange={(e) => setUpdatedProfile({ ...updatedProfile, profilePicture: e.target.files[0] })}
                    />
                    <button onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    );
};

export default Profile;
