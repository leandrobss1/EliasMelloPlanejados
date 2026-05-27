import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import * as S from './styles';

type Project = {
  id: string;
  title: string;
  location: string;
  coverImage: string;
  images: string[];
};

export default function Dashboard() {
  const token = localStorage.getItem('token');

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [imageInput, setImageInput] = useState<File | null>(null);

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('projects');

    if (saved) {
      setProjects(JSON.parse(saved));
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('projects', JSON.stringify(projects));
    }
  }, [projects, loading]);

  if (!loading && (!token || token === 'undefined')) {
    return <Navigate to="/" />;
  }

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });

  const addImage = async () => {
    if (!imageInput) return;

    const base64 = await toBase64(imageInput);
    setImages((prev) => [...prev, base64]);
    setImageInput(null);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const createProject = async () => {
    if (!title || !location || !coverImage || images.length === 0) {
      alert('Preencha tudo');
      return;
    }

    const coverBase64 = await toBase64(coverImage);

    const newProject: Project = {
      id: crypto.randomUUID(),
      title,
      location,
      coverImage: coverBase64,
      images,
    };

    setProjects((prev) => [...prev, newProject]);

    setTitle('');
    setLocation('');
    setCoverImage(null);
    setImages([]);
  };

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <S.DashboardContainer>
      <S.DashboardWrapper>
        <S.DashboardTitle>Criar Álbuns</S.DashboardTitle>

        <S.DashboardInput
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <S.DashboardInput
          placeholder="Localização"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <S.DashboardSubTitle>Capa do álbum</S.DashboardSubTitle>
        <S.DashboardInput
          type="file"
          accept="image/*"
          onChange={(e) => setCoverImage(e.target.files?.[0] || null)}
        />

        <S.DashboardSubTitle>Imagens do álbum</S.DashboardSubTitle>

        <S.DashboardInput
          type="file"
          accept="image/*"
          onChange={(e) => setImageInput(e.target.files?.[0] || null)}
        />

        <S.CustomButton onClick={addImage}>Adicionar imagem</S.CustomButton>

        <ul>
          {images.map((img, i) => (
            <li key={i} style={{ marginBottom: 10 }}>
              <img
                src={img}
                alt=""
                style={{
                  width: 120,
                  height: 80,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <S.CustomButton onClick={() => removeImage(i)}>
                Remover
              </S.CustomButton>
            </li>
          ))}
        </ul>

        <S.CustomButton onClick={createProject}>Criar álbum</S.CustomButton>

        <h3>Álbuns criados</h3>

        {projects.map((p) => (
          <div key={p.id} style={{ marginBottom: 20 }}>
            <h3>{p.title}</h3>
            <p>{p.location}</p>

            <img
              src={p.coverImage}
              alt=""
              style={{
                width: 150,
                height: 150,
                padding: 4,
                objectFit: 'cover',
                display: 'block',
              }}
            />

            <S.CustomButton onClick={() => deleteProject(p.id)}>
              Remover álbum
            </S.CustomButton>
          </div>
        ))}
      </S.DashboardWrapper>
    </S.DashboardContainer>
  );
}
