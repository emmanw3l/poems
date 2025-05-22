interface ProfileHeaderProps {
  coverPhotoUrl: string;
  profilePhotoUrl: string;

}

export default function ProfileHeader({ coverPhotoUrl, profilePhotoUrl,}: ProfileHeaderProps) {
  return (
    <div className="profile-header position-relative"
      style={{
    width: "100%",
    // overflow: "hidden",
    margin: "0",
    padding: "0",
  }}>
      {/* Cover Photo */}
      <img src={coverPhotoUrl} alt="Cover" className="" style={{ height: "350px", objectFit: "cover", padding: "0",
        margin: "0",
        width:"100%",
        display:"block",
        overflow: "none"
      }} />

      {/* Profile Photo */}
      <div
        className="position-absolute"
        style={{
          bottom: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "200px",
        }}
      >
        <img
          src={profilePhotoUrl}
          alt="Profile"
          className="rounded-circle border border-white"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Spacer to push content down */}
      {/* <div style={{ height: "60px" }}></div> */}

      {/* Name */}
      {/* <div className="text-center mt-3 position-relative">
        <h4>{name}</h4>
      </div> */}
    </div>
  );
}
