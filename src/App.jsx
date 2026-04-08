import { useState } from "react";


const checklistData = [
  {
    id: 1,
    category: "필수 학습 통제 기능",
    icon: "🔒",
    color: "#DC2626",
    bgColor: "#FEF2F2",
    borderColor: "#FECACA",
    priority: "즉시탈락",
    items: [
      { id: "1-1", text: "훈련 시작 시 휴대폰 OTP 본인인증 시스템 구현", sub: "본인인증 및 대리수강 방지" },
      { id: "1-2", text: "캡챠(CAPTCHA) 인증 기능 구현", sub: "본인인증 및 대리수강 방지" },
      { id: "1-3", text: "동일 ID 중복 로그인 차단 기능", sub: "동시접속 통제" },
      { id: "1-4", text: "하루 최대 8시간(8차시) 수강 한도 제한 로직", sub: "수강 한도 통제" },
      { id: "1-5", text: "미수강 페이지/차시 건너뛰기 방지 네비게이션 제어", sub: "순차학습 통제" },
      { id: "1-6", text: "심사용 평가 계정 별도 생성 기능", sub: "심사 대응" },
      { id: "1-7", text: "심사용 계정에 한해 통제 기능 일시 해제/복구 기능", sub: "심사 대응" },
    ],
  },
  {
    id: 2,
    category: "진도율 산정 핵심 로직",
    icon: "📊",
    color: "#7C3AED",
    bgColor: "#F5F3FF",
    borderColor: "#DDD6FE",
    priority: "즉시탈락",
    items: [
      { id: "2-1", text: "차시별 인정 학습시간 기준 50% 이상 수강 시에만 진도율 반영 로직", sub: "핵심 검증 항목" },
      { id: "2-2", text: "콘텐츠 실제 재생시간 기반 학습시간 측정 기능", sub: "핵심 검증 항목" },
      { id: "2-3", text: "콘텐츠 재생 시간 대비 학습시간 과도 산정 방지 로직", sub: "핵심 검증 항목" },
      { id: "2-4", text: "훈련 분량 검토 로직 구현 및 검증 테스트", sub: "핵심 검증 항목" },
      { id: "2-5", text: "차시별 진도율 상세 로그 기록 및 저장", sub: "이력 관리" },
    ],
  },
  {
    id: 3,
    category: "자기주도적 학습 지원 기능",
    icon: "🎯",
    color: "#0369A1",
    bgColor: "#F0F9FF",
    borderColor: "#BAE6FD",
    priority: "고득점",
    items: [
      { id: "3-1", text: "온라인 챗봇 기능 구현", sub: "학습도구" },
      { id: "3-2", text: "보충심화 학습자료실 구현", sub: "학습도구" },
      { id: "3-3", text: "용어설명집(글로사리) 기능", sub: "학습도구" },
      { id: "3-4", text: "콘텐츠 스크랩 기능", sub: "학습도구" },
      { id: "3-5", text: "학습 메모 기능", sub: "학습도구" },
      { id: "3-6", text: "교안 다운로드 기능", sub: "학습도구" },
      { id: "3-7", text: "훈련 시작 전 사전진단 테스트/설문 기능", sub: "맞춤형 학습" },
      { id: "3-8", text: "진단 결과별 맞춤형 보충학습자료 제공 로직", sub: "맞춤형 학습" },
      { id: "3-9", text: "실시간 Q&A 질의응답 게시판", sub: "실시간 소통" },
      { id: "3-10", text: "토론방 기능", sub: "실시간 소통" },
      { id: "3-11", text: "소셜러닝/커뮤니티 공간 구축", sub: "실시간 소통" },
      { id: "3-12", text: "진도율 저조 훈련생 식별 및 학습 독려 알림 시스템", sub: "학습 독려" },
      { id: "3-13", text: "평가 미완료 훈련생 파악 및 독려 관리자 기능", sub: "학습 독려" },
    ],
  },
  {
    id: 4,
    category: "평가 및 피드백 시스템",
    icon: "📝",
    color: "#B45309",
    bgColor: "#FFFBEB",
    borderColor: "#FDE68A",
    priority: "필수",
    items: [
      { id: "4-1", text: "객관식 시험 응시 기능", sub: "평가 응시" },
      { id: "4-2", text: "서술형/논술형 과제 작성 및 제출 기능", sub: "평가 응시" },
      { id: "4-3", text: "실습형 과제 확인 및 제출 기능", sub: "평가 응시" },
      { id: "4-4", text: "시험 제한 시간 설정 기능", sub: "시험 통제" },
      { id: "4-5", text: "모사답안(베낀 답안) 탐지 및 방지 시스템", sub: "시험 통제" },
      { id: "4-6", text: "교·강사 과제/평가 상세 첨삭 작성 기능", sub: "개별 피드백" },
      { id: "4-7", text: "훈련생 학습 페이지 내 채점 결과 및 피드백 확인 기능", sub: "개별 피드백" },
      { id: "4-8", text: "훈련 종료 후 만족도 설문조사 기능", sub: "설문조사" },
    ],
  },
  {
    id: 5,
    category: "인프라 안정성 및 이력 관리",
    icon: "🏗️",
    color: "#065F46",
    bgColor: "#ECFDF5",
    borderColor: "#A7F3D0",
    priority: "필수",
    items: [
      { id: "5-1", text: "훈련생 진도율 현황 기록 및 조회 (교육생 모듈)", sub: "이력 관리" },
      { id: "5-2", text: "수강 신청/변경 이력 기록 및 관리", sub: "이력 관리" },
      { id: "5-3", text: "평가일 및 평가 결과 기록 관리", sub: "이력 관리" },
      { id: "5-4", text: "교육생 개인이력 및 학습이력 관리 시스템", sub: "이력 관리" },
      { id: "5-5", text: "관리자 모듈에서 전체 수강 현황 실시간 조회 기능", sub: "관리자 시스템" },
      { id: "5-6", text: "다수 동시접속 대응 서버 안정성 확보 (자체서버 or AWS 등 클라우드)", sub: "인프라" },
      { id: "5-7", text: "보안 관리 체계 구축 및 증빙 자료 준비", sub: "인프라" },
      { id: "5-8", text: "서버 다운타임 최소화 모니터링 체계", sub: "인프라" },
    ],
  },
];

const priorityConfig = {
  "즉시탈락": { label: "⚠️ 미충족시 즉시탈락", bg: "#FEE2E2", color: "#991B1B", border: "#FCA5A5" },
  "고득점": { label: "⭐ 고득점 요인", bg: "#EDE9FE", color: "#5B21B6", border: "#C4B5FD" },
  "필수": { label: "✅ 필수 구현", bg: "#D1FAE5", color: "#065F46", border: "#6EE7B7" },
};

export default function LMSChecklist() {
  const [checked, setChecked] = useState({});
  const [expanded, setExpanded] = useState({ 1: true, 2: true, 3: true, 4: true, 5: true });

  const toggle = (id) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleSection = (id) => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const totalItems = checklistData.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((checkedCount / totalItems) * 100);

  const getCategoryProgress = (cat) => {
    const done = cat.items.filter((item) => checked[item.id]).length;
    return { done, total: cat.items.length, pct: Math.round((done / cat.items.length) * 100) };
  };

  return (
    <div style={{
      fontFamily: "'Pretendard', 'Noto Sans KR', sans-serif",
      background: "#F8FAFC",
      minHeight: "100vh",
      padding: "32px 16px",
    }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>

        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)",
          borderRadius: 20,
          padding: "32px 36px",
          marginBottom: 28,
          color: "white",
          boxShadow: "0 20px 40px rgba(15,23,42,0.3)",
        }}>
          <div style={{ fontSize: 13, color: "#94A3B8", marginBottom: 8, letterSpacing: 2, fontWeight: 600 }}>
            2026 LMS 인증 심사
          </div>
          <h1 style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 800, letterSpacing: -0.5, color: "#ffffff" }}>
            시스템 개발 체크리스트
          </h1>
          <p style={{ margin: "0 0 24px", color: "#CBD5E1", fontSize: 14 }}>
            총 {totalItems}개 개발 항목 · {checkedCount}개 완료
          </p>

          {/* Progress bar */}
          <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 99, height: 10, overflow: "hidden" }}>
            <div style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #38BDF8, #818CF8)",
              borderRadius: 99,
              transition: "width 0.4s ease",
            }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 13, color: "#94A3B8" }}>
            <span>{checkedCount} / {totalItems} 항목 완료</span>
            <span style={{ fontWeight: 700, color: "#38BDF8" }}>{progress}%</span>
          </div>
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
          {Object.entries(priorityConfig).map(([key, val]) => (
            <div key={key} style={{
              background: val.bg,
              border: `1px solid ${val.border}`,
              color: val.color,
              padding: "5px 14px",
              borderRadius: 99,
              fontSize: 12,
              fontWeight: 600,
            }}>{val.label}</div>
          ))}
        </div>

        {/* Categories */}
        {checklistData.map((cat) => {
          const prog = getCategoryProgress(cat);
          const pConf = priorityConfig[cat.priority];
          const isOpen = expanded[cat.id];

          return (
            <div key={cat.id} style={{
              background: "white",
              borderRadius: 16,
              marginBottom: 16,
              border: `1px solid ${cat.borderColor}`,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            }}>
              {/* Category Header */}
              <div
                onClick={() => toggleSection(cat.id)}
                style={{
                  background: cat.bgColor,
                  padding: "18px 24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottom: isOpen ? `1px solid ${cat.borderColor}` : "none",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 24 }}>{cat.icon}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 15, color: cat.color }}>{cat.category}</div>
                    <div style={{
                      display: "inline-block",
                      marginTop: 4,
                      background: pConf.bg,
                      border: `1px solid ${pConf.border}`,
                      color: pConf.color,
                      padding: "2px 10px",
                      borderRadius: 99,
                      fontSize: 11,
                      fontWeight: 700,
                    }}>{pConf.label}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: cat.color }}>{prog.pct}%</div>
                    <div style={{ fontSize: 11, color: "#94A3B8" }}>{prog.done}/{prog.total}</div>
                  </div>
                  <span style={{ fontSize: 18, color: cat.color, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
                </div>
              </div>

              {/* Items */}
              {isOpen && (
                <div style={{ padding: "8px 0" }}>
                  {cat.items.map((item, idx) => (
                    <div
                      key={item.id}
                      onClick={() => toggle(item.id)}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 14,
                        padding: "12px 24px",
                        cursor: "pointer",
                        background: checked[item.id] ? "#F8FAFC" : "white",
                        borderBottom: idx < cat.items.length - 1 ? "1px solid #F1F5F9" : "none",
                        transition: "background 0.15s",
                      }}
                    >
                      {/* Checkbox */}
                      <div style={{
                        width: 22,
                        height: 22,
                        borderRadius: 6,
                        border: checked[item.id] ? `2px solid ${cat.color}` : "2px solid #CBD5E1",
                        background: checked[item.id] ? cat.color : "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                        transition: "all 0.15s",
                      }}>
                        {checked[item.id] && <span style={{ color: "white", fontSize: 13, fontWeight: 700 }}>✓</span>}
                      </div>

                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: checked[item.id] ? "#94A3B8" : "#1E293B",
                          textDecoration: checked[item.id] ? "line-through" : "none",
                          lineHeight: 1.5,
                        }}>{item.text}</div>
                        <div style={{ fontSize: 12, color: "#94A3B8", marginTop: 2 }}>#{item.sub}</div>
                      </div>

                      <div style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: cat.color,
                        background: cat.bgColor,
                        padding: "3px 8px",
                        borderRadius: 99,
                        flexShrink: 0,
                        alignSelf: "flex-start",
                      }}>{item.id}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {/* Footer summary */}
        <div style={{
          background: "#0F172A",
          borderRadius: 16,
          padding: "24px 28px",
          color: "white",
          marginTop: 8,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
        }}>
          <div>
            <div style={{ fontSize: 13, color: "#64748B", marginBottom: 4 }}>전체 개발 진행률</div>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#38BDF8" }}>{progress}%</div>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {checklistData.map((cat) => {
              const p = getCategoryProgress(cat);
              return (
                <div key={cat.id} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 18, fontWeight: 800, color: cat.color }}>{p.done}/{p.total}</div>
                  <div style={{ fontSize: 11, color: "#64748B" }}>{cat.icon}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
