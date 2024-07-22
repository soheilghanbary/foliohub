'use client';
import { Avatar } from '@/components/avatar';
import { Button } from '@/components/ui/button';
import { UploadCloudIcon } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export function UserUpload({ initialPath }: { initialPath: string }) {
  const [path, setPath] = useState(initialPath);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;
    setPath(URL.createObjectURL(acceptedFiles[0]));
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <div className="flex items-center gap-4">
      <Avatar src={path} alt="" className="size-20 shadow-sm" />
      <Button {...getRootProps()} variant={'outline'} size={'sm'}>
        <input type="hidden" {...getInputProps()} />
        <UploadCloudIcon className="ml-2 size-4" />
        آپلود تصویر
      </Button>
    </div>
  );
}
