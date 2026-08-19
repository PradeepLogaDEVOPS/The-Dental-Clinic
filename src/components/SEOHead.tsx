import React, { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "The Dental Clinics | Ethical & Comprehensive Dental Healthcare in Chennai",
  description = "The Dental Clinics in Chennai, established by Dr. M. Gopalakrishnan, son of Dr. V. M. Nair, a medical physician. Specializing in dental implants, painless root canal, smile design, braces, and oral surgery across Periyar Nagar, Jawahar Nagar, and Thiru Vi Ka Nagar.",
  canonicalUrl = "https://thedentalclinics.in"
}) => {
  useEffect(() => {
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', canonicalUrl);
    }
  }, [title, description, canonicalUrl]);

  return null;
};
