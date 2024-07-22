import { uploadImage } from "@/lib/upload";
import type { Site, User } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type SiteProps = Site & {
  user: User;
};

function useSite() {
  const qc = useQueryClient();

  const getAll = useQuery<SiteProps[]>({
    queryKey: ["sites"],
    queryFn: async () => {
      const res = await fetch("/api/sites");
      return await res.json();
    },
  });

  const addSite = useMutation({
    mutationFn: async (values: { name: string; url: string; file: File }) => {
      const upload = await uploadImage(values.file);
      const res = await fetch("/api/sites", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          url: values.url,
          image: upload.Location,
        }),
      });
      return await res.json();
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["sites"] }),
  });

  return { addSite, getAll };
}

export { useSite };
